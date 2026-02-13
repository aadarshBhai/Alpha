import React from 'react';
import Section from '../components/Section';
import { getCourses } from '../data';
import CourseCard from '../components/CourseCard';
import { useTranslation } from '../contexts/LanguageContext';

const Courses = () => {
  const { t } = useTranslation();
  const courses = getCourses();

  return (
    <Section
      id="courses"
      title={t('academicPrograms')}
      subtitle={t('academicProgramsSubtitle')}
    >
      <div className="grid-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Section>
  );
};

export default Courses;
