# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
slack, email, or any other method with the owners of this repository before making a change. 

Please observe and follow the standards addressed below when contributing to the project.

## Our Standards

In addition the the requirements above, we maintain the following standards for new code added to our codebases.

* Code contributed to the repository should be free and clear of bugs or unworking features that cause breakage of the software.
* Comments should be removed from the code. The code should be readable enough without the use of comments. This includes //TODO and other comments designed to point to future functionality. If additional work is needed, simply create a new issue card for the feature so the entire team has visibility of the need and is able to act on it.
* Keep the application in a deployable state at all times. This means any code contributed should be tested and ready for deployment to the system, assuming the PR is approved.
* All PRs must be approved by at least one other developer who has not worked on the PR.
* Ensure you have clearly outlined the problem addressed with each PR and stated how you addressed the problem with your code changes.
* Keep PRs as small as possible. Large PRs require a lengthy review and are more likely to introduce bugs into the platform. It is imperative that developers keep each PR targeted to the problem addressed with the issue card. If you find a problem in the code seperate from the problem the card is designed to address, it is best to open a new issue card and address that problem in a seperate PR.
* Every PR must be attributed to a specific issue card or issue number.

## Pull Request Process

Requirements for new PRs can be found in `.github/PULL_REQUEST_TEMPLATE.md`. The contents of this file is also automatically inserted in the description of any PRs that are created ensuring you are able to review each item and check it off before requesting a code review of your PR.

1. New feature documentation in confluence, repo README, or, for non features, explanation of change in commit and issue card.
1. Minimum 1 test that covers the update/feature.
1. All tests run and passed prior to creation of pull request.
1. Rebased from Master prior to creation of pull request.