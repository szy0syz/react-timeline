import React from 'react';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag">{data.category.tag}</span>
    </div>
  </div>
);

export default TimelineItem;
