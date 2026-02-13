import React from 'react';
import Card from './Card';
import { useTranslation } from '../contexts/LanguageContext';

const CourseCard = ({ course }) => {
  const { t } = useTranslation();
  const title = t(`course_${course.id}_title`);
  const description = t(`course_${course.id}_description`);
  const highlights = course.highlights
    ? [t(`course_${course.id}_h1`), t(`course_${course.id}_h2`), t(`course_${course.id}_h3`)]
    : null;
  return (
    <Card className="course-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      {highlights && (
        <ul className="card-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default CourseCard;
