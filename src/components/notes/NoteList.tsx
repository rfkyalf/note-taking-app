'use client';

import Tabs, { TabsContent, TabsHeader, TabsTitle } from '@/components/Tabs';
import {
  BriefcaseBusiness,
  GalleryHorizontalEnd,
  House,
  SquareUserRound,
} from 'lucide-react';
import { useState } from 'react';

export default function NoteList() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <Tabs>
      <TabsHeader>
        <TabsTitle
          title="All"
          value="all"
          icon={
            <GalleryHorizontalEnd
              className={`size-4 md:size-5 ${
                activeTab === 'all' ? 'text-lime-500' : ''
              }`}
            />
          }
          isActive={activeTab === 'all'}
          onClick={setActiveTab}
        />
        <TabsTitle
          title="Home"
          value="home"
          icon={
            <House
              className={`size-4 md:size-5 ${
                activeTab === 'home' ? 'text-violet-500' : ''
              }`}
            />
          }
          isActive={activeTab === 'home'}
          onClick={setActiveTab}
        />
        <TabsTitle
          title="Job"
          value="job"
          icon={
            <BriefcaseBusiness
              className={`size-4 md:size-5 ${
                activeTab === 'job' ? 'text-rose-500' : ''
              }`}
            />
          }
          isActive={activeTab === 'job'}
          onClick={setActiveTab}
        />
        <TabsTitle
          title="Personal"
          value="personal"
          icon={
            <SquareUserRound
              className={`size-4 md:size-5 ${
                activeTab === 'personal' ? 'text-blue-500' : ''
              }`}
            />
          }
          isActive={activeTab === 'personal'}
          onClick={setActiveTab}
        />
      </TabsHeader>
      <TabsContent
        value="all"
        activeTab={activeTab}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-4"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-full bg-neutral-50 flex flex-col shadow-md rounded-md p-2 md:p-4"
          >
            <p className="text-[0.7rem] text-neutral-500 self-end mb-1">
              {new Date().toDateString()}
            </p>
            <h3 className="text-[1rem] text-neutral-900 font-medium">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="text-[0.8rem] text-neutral-700 text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              nihil culpa molestias ullam saepe nam magni cum tenetur ea
              distinctio!
            </p>
            <p className="w-fit bg-violet-300 text-[0.7rem] text-neutral-900 px-2 rounded-full mt-2 md:mt-4">
              Home
            </p>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="memek" activeTab={activeTab}>
        <div>Memek</div>
      </TabsContent>
    </Tabs>
  );
}
