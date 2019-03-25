import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Icons', module).add('List', () => (
  <StoryLayout rows={6} gap="20px">
    <span data-tooltip="alert-solid">
      <i className="icon icon--alert-solid" />
    </span>
    <span data-tooltip="arrow-down-solid">
      <i className="icon icon--arrow-down-solid" />
    </span>
    <span data-tooltip="arrow-left-solid">
      <i className="icon icon--arrow-left-solid" />
    </span>
    <span data-tooltip="arrow-right-solid">
      <i className="icon icon--arrow-right-solid" />
    </span>
    <span data-tooltip="arrow-up-solid">
      <i className="icon icon--arrow-up-solid" />
    </span>
    <span data-tooltip="arrow-up-circle-solid">
      <i className="icon icon--arrow-up-circle-solid" />
    </span>
    <span data-tooltip="backspace-solid">
      <i className="icon icon--backspace-solid" />
    </span>
    <span data-tooltip="birthday-solid">
      <i className="icon icon--birthday-solid" />
    </span>
    <span data-tooltip="calendar-solid">
      <i className="icon icon--calendar-solid" />
    </span>
    <span data-tooltip="camera-solid">
      <i className="icon icon--camera-solid" />
    </span>
    <span data-tooltip="check-solid">
      <i className="icon icon--check-solid" />
    </span>
    <span data-tooltip="clock-solid">
      <i className="icon icon--clock-solid" />
    </span>
    <span data-tooltip="close-solid">
      <i className="icon icon--close-solid" />
    </span>
    <span data-tooltip="close-circle-solid">
      <i className="icon icon--close-circle-solid" />
    </span>
    <span data-tooltip="code-solid">
      <i className="icon icon--code-solid" />
    </span>
    <span data-tooltip="download-solid">
      <i className="icon icon--download-solid" />
    </span>
    <span data-tooltip="edit-solid">
      <i className="icon icon--edit-solid" />
    </span>
    <span data-tooltip="email-solid">
      <i className="icon icon--email-solid" />
    </span>
    <span data-tooltip="facebook-solid">
      <i className="icon icon--facebook-solid" />
    </span>
    <span data-tooltip="female-solid">
      <i className="icon icon--female-solid" />
    </span>
    <span data-tooltip="female-male-solid">
      <i className="icon icon--female-male-solid" />
    </span>
    <span data-tooltip="file-solid">
      <i className="icon icon--file-solid" />
    </span>
    <span data-tooltip="filter-solid">
      <i className="icon icon--filter-solid" />
    </span>
    <span data-tooltip="grid-solid">
      <i className="icon icon--grid-solid" />
    </span>
    <span data-tooltip="headset-solid">
      <i className="icon icon--headset-solid" />
    </span>
    <span data-tooltip="help-solid">
      <i className="icon icon--help-solid" />
    </span>
    <span data-tooltip="help-circle-solid">
      <i className="icon icon--help-circle-solid" />
    </span>
    <span data-tooltip="info-solid">
      <i className="icon icon--info-solid" />
    </span>
    <span data-tooltip="laptop-solid">
      <i className="icon icon--laptop-solid" />
    </span>
    <span data-tooltip="list-solid">
      <i className="icon icon--list-solid" />
    </span>
    <span data-tooltip="location-solid">
      <i className="icon icon--location-solid" />
    </span>
    <span data-tooltip="lock-solid">
      <i className="icon icon--lock-solid" />
    </span>
    <span data-tooltip="long-arrow-solid">
      <i className="icon icon--long-arrow-solid" />
    </span>
    <span data-tooltip="male-solid">
      <i className="icon icon--male-solid" />
    </span>
    <span data-tooltip="menu-solid">
      <i className="icon icon--menu-solid" />
    </span>
    <span data-tooltip="minimize-solid">
      <i className="icon icon--minimize-solid" />
    </span>
    <span data-tooltip="notes-solid">
      <i className="icon icon--notes-solid" />
    </span>
    <span data-tooltip="notification-solid">
      <i className="icon icon--notification-solid" />
    </span>
    <span data-tooltip="pause-solid">
      <i className="icon icon--pause-solid" />
    </span>
    <span data-tooltip="payment-solid">
      <i className="icon icon--payment-solid" />
    </span>
    <span data-tooltip="phone-solid">
      <i className="icon icon--phone-solid" />
    </span>
    <span data-tooltip="pin-solid">
      <i className="icon icon--pin-solid" />
    </span>
    <span data-tooltip="play-solid">
      <i className="icon icon--play-solid" />
    </span>
    <span data-tooltip="plus-solid">
      <i className="icon icon--plus-solid" />
    </span>
    <span data-tooltip="power-solid">
      <i className="icon icon--power-solid" />
    </span>
    <span data-tooltip="print-solid">
      <i className="icon icon--print-solid" />
    </span>
    <span data-tooltip="refresh-solid">
      <i className="icon icon--refresh-solid" />
    </span>
    <span data-tooltip="search-solid">
      <i className="icon icon--search-solid" />
    </span>
    <span data-tooltip="settings-solid">
      <i className="icon icon--settings-solid" />
    </span>
    <span data-tooltip="shirt-solid">
      <i className="icon icon--shirt-solid" />
    </span>
    <span data-tooltip="shopping-cart-solid">
      <i className="icon icon--shopping-cart-solid" />
    </span>
    <span data-tooltip="survey-solid">
      <i className="icon icon--survey-solid" />
    </span>
    <span data-tooltip="thumbs-down-solid">
      <i className="icon icon--thumbs-down-solid" />
    </span>
    <span data-tooltip="thumbs-up-solid">
      <i className="icon icon--thumbs-up-solid" />
    </span>
    <span data-tooltip="trash-solid">
      <i className="icon icon--trash-solid" />
    </span>
    <span data-tooltip="truck-solid">
      <i className="icon icon--truck-solid" />
    </span>
    <span data-tooltip="user-solid">
      <i className="icon icon--user-solid" />
    </span>
    <span data-tooltip="user-corp-solid">
      <i className="icon icon--user-corp-solid" />
    </span>
    <span data-tooltip="view-solid">
      <i className="icon icon--view-solid" />
    </span>
    <span data-tooltip="alert-outline">
      <i className="icon icon--alert-outline" />
    </span>
    <span data-tooltip="arrow-down-outline">
      <i className="icon icon--arrow-down-outline" />
    </span>
    <span data-tooltip="arrow-left-outline">
      <i className="icon icon--arrow-left-outline" />
    </span>
    <span data-tooltip="arrow-right-outline">
      <i className="icon icon--arrow-right-outline" />
    </span>
    <span data-tooltip="arrow-up-outline">
      <i className="icon icon--arrow-up-outline" />
    </span>
    <span data-tooltip="arrow-up-circle-outline">
      <i className="icon icon--arrow-up-circle-outline" />
    </span>
    <span data-tooltip="backspace-outline">
      <i className="icon icon--backspace-outline" />
    </span>
    <span data-tooltip="birthday-outline">
      <i className="icon icon--birthday-outline" />
    </span>
    <span data-tooltip="calendar-outline">
      <i className="icon icon--calendar-outline" />
    </span>
    <span data-tooltip="camera-outline">
      <i className="icon icon--camera-outline" />
    </span>
    <span data-tooltip="check-outline">
      <i className="icon icon--check-outline" />
    </span>
    <span data-tooltip="clock-outline">
      <i className="icon icon--clock-outline" />
    </span>
    <span data-tooltip="close-outline">
      <i className="icon icon--close-outline" />
    </span>
    <span data-tooltip="close-circle-outline">
      <i className="icon icon--close-circle-outline" />
    </span>
    <span data-tooltip="code-outline">
      <i className="icon icon--code-outline" />
    </span>
    <span data-tooltip="download-outline">
      <i className="icon icon--download-outline" />
    </span>
    <span data-tooltip="edit-outline">
      <i className="icon icon--edit-outline" />
    </span>
    <span data-tooltip="email-outline">
      <i className="icon icon--email-outline" />
    </span>
    <span data-tooltip="female-outline">
      <i className="icon icon--female-outline" />
    </span>
    <span data-tooltip="female-male-outline">
      <i className="icon icon--female-male-outline" />
    </span>
    <span data-tooltip="file-outline">
      <i className="icon icon--file-outline" />
    </span>
    <span data-tooltip="filter-outline">
      <i className="icon icon--filter-outline" />
    </span>
    <span data-tooltip="grid-outline">
      <i className="icon icon--grid-outline" />
    </span>
    <span data-tooltip="headset-outline">
      <i className="icon icon--headset-outline" />
    </span>
    <span data-tooltip="help-outline">
      <i className="icon icon--help-outline" />
    </span>
    <span data-tooltip="help-circle-outline">
      <i className="icon icon--help-circle-outline" />
    </span>
    <span data-tooltip="info-outline">
      <i className="icon icon--info-outline" />
    </span>
    <span data-tooltip="laptop-outline">
      <i className="icon icon--laptop-outline" />
    </span>
    <span data-tooltip="list-outline">
      <i className="icon icon--list-outline" />
    </span>
    <span data-tooltip="location-outline">
      <i className="icon icon--location-outline" />
    </span>
    <span data-tooltip="lock-outline">
      <i className="icon icon--lock-outline" />
    </span>
    <span data-tooltip="long-arrow-outline">
      <i className="icon icon--long-arrow-outline" />
    </span>
    <span data-tooltip="male-outline">
      <i className="icon icon--male-outline" />
    </span>
    <span data-tooltip="menu-outline">
      <i className="icon icon--menu-outline" />
    </span>
    <span data-tooltip="minimize-outline">
      <i className="icon icon--minimize-outline" />
    </span>
    <span data-tooltip="notes-outline">
      <i className="icon icon--notes-outline" />
    </span>
    <span data-tooltip="notification-outline">
      <i className="icon icon--notification-outline" />
    </span>
    <span data-tooltip="pause-outline">
      <i className="icon icon--pause-outline" />
    </span>
    <span data-tooltip="payment-outline">
      <i className="icon icon--payment-outline" />
    </span>
    <span data-tooltip="phone-outline">
      <i className="icon icon--phone-outline" />
    </span>
    <span data-tooltip="pin-outline">
      <i className="icon icon--pin-outline" />
    </span>
    <span data-tooltip="play-outline">
      <i className="icon icon--play-outline" />
    </span>
    <span data-tooltip="plus-outline">
      <i className="icon icon--plus-outline" />
    </span>
    <span data-tooltip="power-outline">
      <i className="icon icon--power-outline" />
    </span>
    <span data-tooltip="print-outline">
      <i className="icon icon--print-outline" />
    </span>
    <span data-tooltip="refresh-outline">
      <i className="icon icon--refresh-outline" />
    </span>
    <span data-tooltip="search-outline">
      <i className="icon icon--search-outline" />
    </span>
    <span data-tooltip="settings-outline">
      <i className="icon icon--settings-outline" />
    </span>
    <span data-tooltip="shirt-outline">
      <i className="icon icon--shirt-outline" />
    </span>
    <span data-tooltip="shopping-cart-outline">
      <i className="icon icon--shopping-cart-outline" />
    </span>
    <span data-tooltip="survey-outline">
      <i className="icon icon--survey-outline" />
    </span>
    <span data-tooltip="thumbs-down-outline">
      <i className="icon icon--thumbs-down-outline" />
    </span>
    <span data-tooltip="thumbs-up-outline">
      <i className="icon icon--thumbs-up-outline" />
    </span>
    <span data-tooltip="trash-outline">
      <i className="icon icon--trash-outline" />
    </span>
    <span data-tooltip="truck-outline">
      <i className="icon icon--truck-outline" />
    </span>
    <span data-tooltip="user-outline">
      <i className="icon icon--user-outline" />
    </span>
    <span data-tooltip="user-corp-outline">
      <i className="icon icon--user-corp-outline" />
    </span>
  </StoryLayout>
))
