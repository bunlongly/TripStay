import React from 'react';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import CategoriesList from '@/components/home/CategoriesList';
import { Suspense } from 'react';
import LoadingCards from '@/components/card/LoadingCards';

function HomePage({
  searchParams
}: {
  searchParams: { category?: string; search?: string };
}) {
  console.log(searchParams);
  return (
    <section>
      <CategoriesList
        category={searchParams?.category}
        search={searchParams?.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams?.category}
          search={searchParams?.search}
        />
      </Suspense>
    </section>
  );
}

export default HomePage;
