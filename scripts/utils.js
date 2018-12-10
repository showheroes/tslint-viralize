const { exec } = require('child_process');
const releaseIt = require('release-it');
const semver = require('semver');
const { version } = require('../package.json');

const baseReleaseOptions = {
    'non-interactive': true
};

const getLastTag = () => {
    return new Promise((resolve) => {
        const command = 'git describe --tags `git rev-list --tags --max-count=1`';
        exec(command, (error, stdout) => {
            if (error) {
                // no tag found, first release.
                resolve('0.0.0');
                return;
            }
            resolve(stdout);
        });
    });
};

const release = (increment) => {
    getLastTag()
        .then((tag) => {
            if (!semver.eq(version, tag)) {
                process.stderr.write('package.json version differs from last' +
                'deployed version. Please review what appened first.');

                process.exit(1);
                return;
            }

            const options = Object.assign(baseReleaseOptions, { increment });
            releaseIt(options).then((output) => {
                process.stdout.write(`released vesion ${output.version}`);
            });
        })
        .catch((err) => {
            process.stderr.write(err);
        });
};

module.exports = {
    release
};
