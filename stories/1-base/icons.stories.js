import React from 'react'

import Icon from '../../packages/components/src/Icon'

const iconList = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-up-circle',
  'backspace',
  'birthday',
  'calendar',
  'camera',
  'check',
  'clock',
  'close',
  'close-circle',
  'code',
  'download',
  'edit',
  'email',
  'facebook',
  'female',
  'female-male',
  'file',
  'filter',
  'grid',
  'headset',
  'help',
  'help-circle',
  'info',
  'laptop',
  'list',
  'location',
  'lock',
  'long-arrow',
  'male',
  'menu',
  'minimize',
  'notes',
  'notification',
  'pause',
  'payment',
  'phone',
  'pin',
  'play',
  'plus',
  'power',
  'print',
  'refresh',
  'search',
  'settings',
  'shirt',
  'shopping-cart',
  'survey',
  'thumbs-down',
  'thumbs-up',
  'trash',
  'truck',
  'user',
  'user-corp',
  'view',
  'alert-outline',
  'arrow-down-outline',
  'arrow-left-outline',
  'arrow-right-outline',
  'arrow-up-outline',
  'arrow-up-circle-outline',
  'backspace-outline',
  'birthday-outline',
  'calendar-outline',
  'camera-outline',
  'check-outline',
  'clock-outline',
  'close-outline',
  'close-circle-outline',
  'code-outline',
  'download-outline',
  'edit-outline',
  'email-outline',
  'female-outline',
  'female-male-outline',
  'file-outline',
  'filter-outline',
  'grid-outline',
  'headset-outline',
  'help-outline',
  'help-circle-outline',
  'info-outline',
  'laptop-outline',
  'list-outline',
  'location-outline',
  'lock-outline',
  'long-arrow-outline',
  'male-outline',
  'menu-outline',
  'minimize-outline',
  'notes-outline',
  'notification-outline',
  'pause-outline',
  'payment-outline',
  'phone-outline',
  'pin-outline',
  'play-outline',
  'plus-outline',
  'power-outline',
  'print-outline',
  'refresh-outline',
  'search-outline',
  'settings-outline',
  'shirt-outline',
  'shopping-cart-outline',
  'survey-outline',
  'thumbs-down-outline',
  'thumbs-up-outline',
  'trash-outline',
  'truck-outline',
  'user-outline',
  'user-corp-outline',
]

export default {
  title: 'Base|Icons',
}

export const list = () => (
  <>
    {iconList.map(name => (
      <span data-tooltip={name}>
        <Icon name={name} />
      </span>
    ))}

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
)

list.story = {
  parameters: { layout: { rows: 6 } },
}
