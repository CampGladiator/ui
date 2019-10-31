import React from 'react'

export default {
  title: 'Components|Badges',
}

export const badge = () => (
  <>
    <div className="badge badge--default" />
    <div className="badge badge--bold" />
    <div className="badge badge--bronze" />
    <div className="badge badge--silver" />
    <div className="badge badge--gold" />
    <div className="badge badge--elite" />
  </>
);

badge.story = {
  parameters: {
    layout: { rows: 1, cols: 6 },
    info: {
      text: `
        ## Badges
        CG Badges are static images stored in S3. It is a representation image for a camper to show their check-in status. 
        A div should be added with a class "badge badge--" and appended with Default | Bold | Bronze | Silver | Gold | Elite
      `
    }
  }
};

export const plate = () => (
  <>
    <div className="plate plate--default" />
    <div className="plate plate--bold" />
    <div className="plate plate--bronze" />
    <div className="plate plate--silver" />
    <div className="plate plate--gold" />
    <div className="plate plate--elite" />
  </>
);

plate.story = {
  parameters: {
    layout: { rows: 1, cols: 6 },
    info: {
      text: `
        ## Plates
        CG Plates are static images stored in S3. It is a representation image for a camper to show their check-in status.
        A div should be added with a class "plate plate--" and appended with Default | Bold | Bronze | Silver | Gold | Elite
      `
    }
  }
};

export const badgeWithPlate = () => (
  <>
    <div className="badge-with-plate badge-with-plate--default" />
    <div className="badge-with-plate badge-with-plate--bold" />
    <div className="badge-with-plate badge-with-plate--bronze" />
    <div className="badge-with-plate badge-with-plate--silver" />
    <div className="badge-with-plate badge-with-plate--gold" />
    <div className="badge-with-plate badge-with-plate--elite" />
  </>
);

badgeWithPlate.story = {
  parameters: {
    layout: { rows: 1, cols: 6 },
    info: {
      text: `
        ## Badge with plate
        CG Badge with plates are static images stored in S3. It is a representation image for a camper to show their check-in status.
        A div should be added with a class "badge-with-plate badge-with-plate--" and appended with Default | Bold | Bronze | Silver | Gold | Elite
      `
    }
  }
};
