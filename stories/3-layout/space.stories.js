import React from 'react'

const StoryStyles = () => (
  <style>
    {`
    body {
      font-size: 12px;
    }

    .margin {
      background: #facd9a
    }

    .padding {
      background: #c4deb8
    }

    .row {
      display: flex;
    }

    .row::after {
      content: '';
      flex: 1;
      background: #eee;
    }

    .content {
      background: #9fc3e6;
      display: block;
      background: #9fc3e6;
      color: white;
    }

    .block {
      background: #eee;
      position: relative;
      min-width: 180px
    }

    .block__label {
      white-space: nowrap;
      top: 0;
      left: 0;
      position: absolute;
      color: #666;
    }
  `}
  </style>
)

export default {
  title: 'Layout|Space',
}

export const padding = () => (
  <>
    <div className="padding space-inset-xs">
      <code className="content">.space-inset-xs</code>
    </div>
    <div className="padding space-inset-s">
      <code className="content">.space-inset-s</code>
    </div>
    <div className="padding space-inset-m">
      <code className="content">.space-inset-m</code>
    </div>
    <div className="padding space-inset-l">
      <code className="content">.space-inset-l</code>
    </div>
    <div className="padding space-inset-xl">
      <code className="content">.space-inset-xl</code>
    </div>
    <div className="padding space-inset-xxl">
      <code className="content">.space-inset-xxl</code>
    </div>

    <div className="padding space-x-xs">
      <code className="content">.space-x-xs</code>
    </div>
    <div className="padding space-x-s">
      <code className="content">.space-x-s</code>
    </div>
    <div className="padding space-x-m">
      <code className="content">.space-x-m</code>
    </div>
    <div className="padding space-x-l">
      <code className="content">.space-x-l</code>
    </div>
    <div className="padding space-x-xl">
      <code className="content">.space-x-xl</code>
    </div>
    <div className="padding space-x-xxl">
      <code className="content">.space-x-xxl</code>
    </div>

    <div className="padding space-y-xs">
      <code className="content">.space-y-xs</code>
    </div>
    <div className="padding space-y-s">
      <code className="content">.space-y-s</code>
    </div>
    <div className="padding space-y-m">
      <code className="content">.space-y-m</code>
    </div>
    <div className="padding space-y-l">
      <code className="content">.space-y-l</code>
    </div>
    <div className="padding space-y-xl">
      <code className="content">.space-y-xl</code>
    </div>
    <div className="padding space-y-xxl">
      <code className="content">.space-y-xxl</code>
    </div>
    <StoryStyles />
  </>
)

padding.story = {
  parameters: { layout: { rows: 6, gap: '0 50px' } },
}

export const margin = () => (
  <>
    <div className="margin space-stack-xs">
      <code className="content space-stack-xs">.space-stack-xs</code>
    </div>
    <div className="margin space-stack-s">
      <code className="content space-stack-s">.space-stack-s</code>
    </div>
    <div className="margin space-stack-m">
      <code className="content space-stack-m">.space-stack-m</code>
    </div>
    <div className="margin space-stack-l">
      <code className="content space-stack-l">.space-stack-l</code>
    </div>
    <div className="margin space-stack-xl">
      <code className="content space-stack-xl">.space-stack-xl</code>
    </div>
    <div className="margin space-stack-xxl">
      <code className="content space-stack-xxl">.space-stack-xxl</code>
    </div>

    <div className="block space-inset-l">
      <code className="block__label">.space-between-xs</code>
      <div className="margin space-between-xs">
        <code className="content">child</code>
        <code className="content">child</code>
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-s</code>
      <div className="margin space-between-s">
        <code className="content">child</code>
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-m</code>
      <div className="margin space-between-m">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-l</code>
      <div className="margin space-between-l">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-xl</code>
      <div className="margin space-between-xl">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-xxl</code>
      <div className="margin space-between-xxl">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>

    <div className="block space-inset-l">
      <code className="block__label">.space-between-inline-xs</code>
      <div className="row margin space-between-inline-xs">
        <code className="content">child</code>
        <code className="content">child</code>
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-inline-s</code>
      <div className="row margin space-between-inline-s">
        <code className="content">child</code>
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-inline-m</code>
      <div className="row margin space-between-inline-m">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-inline-l</code>
      <div className="row margin space-between-inline-l">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-inline-xl</code>
      <div className="row margin space-between-inline-xl">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <div className="block space-inset-l">
      <code className="block__label">.space-between-inline-xxl</code>
      <div className="row margin space-between-inline-xxl">
        <code className="content">child</code>
        <code className="content">child</code>
      </div>
    </div>
    <StoryStyles />
  </>
)

margin.story = {
  parameters: { layout: { rows: 6, gap: '0 50px' } },
}
