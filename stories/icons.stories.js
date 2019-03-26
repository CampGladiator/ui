import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'

storiesOf('Icons', module).add(
  'List',
  () => (
    <>
      <span data-tooltip="alert">
        <i className="icon icon--alert" />
      </span>
      <span data-tooltip="arrow-down">
        <i className="icon icon--arrow-down" />
      </span>
      <span data-tooltip="arrow-left">
        <i className="icon icon--arrow-left" />
      </span>
      <span data-tooltip="arrow-right">
        <i className="icon icon--arrow-right" />
      </span>
      <span data-tooltip="arrow-up">
        <i className="icon icon--arrow-up" />
      </span>
      <span data-tooltip="arrow-up-circle">
        <i className="icon icon--arrow-up-circle" />
      </span>
      <span data-tooltip="backspace">
        <i className="icon icon--backspace" />
      </span>
      <span data-tooltip="birthday">
        <i className="icon icon--birthday" />
      </span>
      <span data-tooltip="calendar">
        <i className="icon icon--calendar" />
      </span>
      <span data-tooltip="camera">
        <i className="icon icon--camera" />
      </span>
      <span data-tooltip="check">
        <i className="icon icon--check" />
      </span>
      <span data-tooltip="clock">
        <i className="icon icon--clock" />
      </span>
      <span data-tooltip="close">
        <i className="icon icon--close" />
      </span>
      <span data-tooltip="close-circle">
        <i className="icon icon--close-circle" />
      </span>
      <span data-tooltip="code">
        <i className="icon icon--code" />
      </span>
      <span data-tooltip="download">
        <i className="icon icon--download" />
      </span>
      <span data-tooltip="edit">
        <i className="icon icon--edit" />
      </span>
      <span data-tooltip="email">
        <i className="icon icon--email" />
      </span>
      <span data-tooltip="facebook">
        <i className="icon icon--facebook" />
      </span>
      <span data-tooltip="female">
        <i className="icon icon--female" />
      </span>
      <span data-tooltip="female-male">
        <i className="icon icon--female-male" />
      </span>
      <span data-tooltip="file">
        <i className="icon icon--file" />
      </span>
      <span data-tooltip="filter">
        <i className="icon icon--filter" />
      </span>
      <span data-tooltip="grid">
        <i className="icon icon--grid" />
      </span>
      <span data-tooltip="headset">
        <i className="icon icon--headset" />
      </span>
      <span data-tooltip="help">
        <i className="icon icon--help" />
      </span>
      <span data-tooltip="help-circle">
        <i className="icon icon--help-circle" />
      </span>
      <span data-tooltip="info">
        <i className="icon icon--info" />
      </span>
      <span data-tooltip="laptop">
        <i className="icon icon--laptop" />
      </span>
      <span data-tooltip="list">
        <i className="icon icon--list" />
      </span>
      <span data-tooltip="location">
        <i className="icon icon--location" />
      </span>
      <span data-tooltip="lock">
        <i className="icon icon--lock" />
      </span>
      <span data-tooltip="long-arrow">
        <i className="icon icon--long-arrow" />
      </span>
      <span data-tooltip="male">
        <i className="icon icon--male" />
      </span>
      <span data-tooltip="menu">
        <i className="icon icon--menu" />
      </span>
      <span data-tooltip="minimize">
        <i className="icon icon--minimize" />
      </span>
      <span data-tooltip="notes">
        <i className="icon icon--notes" />
      </span>
      <span data-tooltip="notification">
        <i className="icon icon--notification" />
      </span>
      <span data-tooltip="pause">
        <i className="icon icon--pause" />
      </span>
      <span data-tooltip="payment">
        <i className="icon icon--payment" />
      </span>
      <span data-tooltip="phone">
        <i className="icon icon--phone" />
      </span>
      <span data-tooltip="pin">
        <i className="icon icon--pin" />
      </span>
      <span data-tooltip="play">
        <i className="icon icon--play" />
      </span>
      <span data-tooltip="plus">
        <i className="icon icon--plus" />
      </span>
      <span data-tooltip="power">
        <i className="icon icon--power" />
      </span>
      <span data-tooltip="print">
        <i className="icon icon--print" />
      </span>
      <span data-tooltip="refresh">
        <i className="icon icon--refresh" />
      </span>
      <span data-tooltip="search">
        <i className="icon icon--search" />
      </span>
      <span data-tooltip="settings">
        <i className="icon icon--settings" />
      </span>
      <span data-tooltip="shirt">
        <i className="icon icon--shirt" />
      </span>
      <span data-tooltip="shopping-cart">
        <i className="icon icon--shopping-cart" />
      </span>
      <span data-tooltip="survey">
        <i className="icon icon--survey" />
      </span>
      <span data-tooltip="thumbs-down">
        <i className="icon icon--thumbs-down" />
      </span>
      <span data-tooltip="thumbs-up">
        <i className="icon icon--thumbs-up" />
      </span>
      <span data-tooltip="trash">
        <i className="icon icon--trash" />
      </span>
      <span data-tooltip="truck">
        <i className="icon icon--truck" />
      </span>
      <span data-tooltip="user">
        <i className="icon icon--user" />
      </span>
      <span data-tooltip="user-corp">
        <i className="icon icon--user-corp" />
      </span>
      <span data-tooltip="view">
        <i className="icon icon--view" />
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
      <style>
        {`
        span[data-tooltip] {
          padding: 15px;
        }

        span[data-tooltip]:hover i {
          color: #263746;
          transform: scale(1.8);
        }
      `}
      </style>
    </>
  ),
  { layout: { rows: 6 } },
)
