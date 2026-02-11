import React from 'react';
import Card from './Card';

const CourseCard = ({ course }) => (
  <Card className="course-card">
    <h3 className="card-title">{course.title}</h3>
    <p className="card-text">{course.description}</p>
    {course.highlights && (
      <ul className="card-list">
        {course.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </Card>
);

export default CourseCard;
