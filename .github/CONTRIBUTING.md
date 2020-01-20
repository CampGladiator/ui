# Contributing

**Please read this document IN FULL before contributing any updates to this repository**

When contributing to this repository, please first discuss the change you wish to make via issue,
slack, email, or any other method with the owners of this repository before making a change. 

Please observe and follow the standards addressed below when contributing to the project.

## Our Standards

In addition the the requirements above, we maintain the following standards for new code added to our codebases.

* Code contributed to the repository should be free and clear of bugs or unworking features that cause breakage of the software.
* Comments should be removed from the code. The code should be readable enough without the use of comments. This includes //TODO and other comments designed to point to future functionality. If additional work is needed, simply create a new issue card for the feature so the entire team has visibility of the need and is able to act on it.
* Keep the application in a deployable state at all times. This means any code contributed should be tested and ready for deployment to the system, assuming the PR is approved.
* **All PRs must be approved by at least one other developer who has not worked on the PR.**
* Ensure you have clearly outlined the problem addressed with each PR and stated how you addressed the problem with your code changes.
* Keep PRs as small as possible. Large PRs require a lengthy review and are more likely to introduce bugs into the platform. It is imperative that developers keep each PR targeted to the problem addressed with the issue card. If you find a problem in the code seperate from the problem the card is designed to address, it is best to open a new issue card and address that problem in a seperate PR.
* Every PR must be attributed to a specific issue card or issue number.

## Other Considerations

**Design Review:**

Before working on or adding a new UI element or component, first fully review the designs and any design documentation of the item in Figma. 

Try to match naming conventions as closely with Figma as possible (within reason). If you must rename a component in a way that is not easily recognizable from the component name in Figma, please collaborate with the design team to see if the component name can be updated in Figma to match, or to see if there is a better compromise on the naming.

Figma is the specification we use for all design elements. It should go without saying that components developed for this library should exactly match what we have in Figma. If an element can not be created to spec, it is your responsibility to collaborate with the UI design team to find a solution.

Be sure you have read and understand the [UI/UX Design Guide in Confluence](https://campgladiator.atlassian.net/wiki/spaces/CG/pages/628817933/UI+UX+Design+Documentation)

**Segmenting UI from Components**

When developing in this project, keep in mind that the ui package is a dependency of the components package. Additionally, the ui package is standalone. With this in mind, ALL styling should exist in the ui package only. The components package can then be used to create simple react components that consume styles from the ui package.

Additionally, consider keeping the react components as lightweight and scalable as possible to ensure we reduce complexity and inter-dependency for future projects.

**Documenting Your Changes:**

Documentation must be added for any new styles or react components added. This should be done in storybook. You can learn more about Storybook here: [https://storybook.js.org/](https://storybook.js.org/)

Storybook documentation for each new element or component should include at least the following:
- Code example(s) of the corresponding element or component
- Text documentation breifly explaining the use case of the element/component

## Pull Request Process

Requirements for new PRs can be found in `.github/PULL_REQUEST_TEMPLATE.md`. The contents of this file is also automatically inserted in the description of any PRs that are created ensuring you are able to review each item and check it off before requesting a code review of your PR.

1. New feature documentation added to storybook.
1. Provided at least 1 unit test that covers any components created/updated.
1. Linter run prior to creation of pull request `yarn lint`.
1. All tests run and passed prior to creation of pull request.
1. Rebased from Master prior to creation of pull request.
1. Ran `yarn bump` to update semver of any updated packages.

## Deployment process

This repo consists of multiple NPM packages managed by Lerna. Lerna allows us to manage and deploy multiple NPM packages from a single repository. Additionally, Storybook is used to document all cooresponding ui styles/components that belong to those packages. Before deploying, you must run `yarn bump` to update version numbers on any updated packages. 

**Important:** running `yarn bump` will automatically generate a new commit. It is important that you stage and commit your existing changes before running this command or you risk your changes getting overridden by the automated commit.

Running the `yarn bump` command will prompt you with instructions on selecting the semver number you want to use for each updated package. This command will automatically generate a new commit and tag for the updates. You'll need to use `git push --force-with-lease` to push these new branches up to remote.

Once your PR has been approved by another team member and merged to master, you can create a tag in Github which will trigger our CI process to deploy all updated packages to the NPM library.
