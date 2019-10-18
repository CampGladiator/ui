import React from 'react'

export default {
  title: 'Utility|Text',
}

export const color = () => (
  <>
    <div>
      <p className="text-gladiator">.text-gladiator</p>
      <p className="text-navy">.text-navy</p>
      <p className="text-pavement">.text-pavement</p>
      <p className="text-dark-gray">.text-dark-gray</p>
      <p className="text-medium-gray">.text-medium-gray</p>
      <p className="text-light-gray">.text-light-gray</p>
    </div>
    <div>
      <p className="background-gladiator text-white">.background-gladiator</p>
      <p className="background-navy text-white">.background-navy</p>
      <p className="background-pavement text-white">.background-pavement</p>
      <p className="background-dark-gray text-white">.background-dark-gray</p>
      <p className="background-medium-gray text-white">
        .background-medium-gray
      </p>
      <p className="background-light-gray text-white">.background-light-gray</p>
    </div>
  </>
)

color.story = {
  parameters: { layout: { rows: 1, gap: '0 20px' } },
}
