import React from 'react';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import CategoriesList from '@/components/home/CategoriesList';

function HomePage({
  searchParams
}: {
  searchParams: { category?: string; search?: string };
}) {
  console.log(searchParams)
  return (
    <section>
      <CategoriesList />
      <PropertiesContainer />
    </section>
  );
}

export default HomePage;
