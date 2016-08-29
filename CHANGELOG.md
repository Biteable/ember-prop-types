# 2.5.11

* **Added** pull request template.

# 2.5.10

* **Added** `npm-install-security-check` as a dependency to make consumers more security conscious.

# 2.5.9

* Updated CI configuration to not run npm scripts on install.

# 2.5.8

* Cleaned up README to pass default config for remark-lint and better organized badges.
* Updated dev dependencies.

# 2.5.7

* Addressed the following security vulnerability: https://nodesecurity.io/advisories/118.

# 2.5.6

* **Updated** Travis configuration to test addon against older versions of Ember.

# 2.5.5

* Only import polyfill for CI and not for consuming apps. Apps that want Symbol can pay as they go.

# 2.5.4

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.5.3

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.5.2

* **Fixed** issue when `Ember.assign` does not exist to fallback on `Object.assign` then `Ember.merge`.

# 2.5.1

* **Addedd** missing prop-types to README.
* **Upgraded** `ember-get-config` to latest version.

# 2.5.0

* **Added** `element` prop-type.

# 2.4.2

* **Added** `symbol` prop-type.

# 2.4.1

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.4.0

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.3.1

* **Fixed** `shape` prop-type to not error when non-required props in shape are not present.

# 2.3.0

* **Added** `arrayOf` prop-type.

# 2.2.8

* Split source code up into separate modules as a first step in refactoring and improving implementation.

# 2.2.7

* **Added** tests for `oneOf` prop-type.

# 2.2.6

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.2.5

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.2.4

* **Added** tests for `instanceOf` prop-type.

# 2.2.3

* **Added** tests for `shape` prop-type and commented out tests that exercise issue #24.

# 2.2.2

* **Added** a bunch of tests to help prevent future regressions and verify addon does what it advertises.

# 2.2.1

- Finishes the removal of lodash as a dependency
- Removed Object.assign to fix cases where browsers don't support the latest ES6 syntax

# 2.2.0

- Removed lodash as a dependency to avoid lodash as a downstream requirement
- Replaced lodash functions with equivalent Ember/ES6/custom functions

# 2.1.0

* **Changed** from `ember-lodash` to `ember-lodash-shim`.

# 2.0.1

* Updated dependencies to the latest versions.

# 2.0.0

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 1.5.0

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 1.4.0

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`
