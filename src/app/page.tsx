import React from 'react';
import Image from 'next/image';
import zainImage from '../app/zain.jpg'; // Adjust path if necessary

const Page = () => {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <Image
        src={zainImage}
        alt="My image"
        width={200}
        height={200}
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            My name is M. Zain Shahzad. I am an AI student. My age is 17 years.
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">AI Student</div>
          <div className="text-slate-700 dark:text-slate-500">Age 17</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Page;