import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BriefcaseBusiness,
  GalleryHorizontalEnd,
  House,
  UserRoundPen,
} from 'lucide-react';
import NoteList from './NoteList';

export default function TabsNote() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 lg:gap-x-6 mb-4">
        <TabsTrigger
          value="all"
          className="text-[0.8rem] md:text-[0.9rem] text-neutral-500 flex flex-wrap items-center gap-x-2 md:gap-x-3 lg:gap-x-4 capitalize px-2 md:px-4 py-1 md:py-2 rounded-md data-[state=active]:bg-neutral-50 data-[state=active]:shadow-md"
        >
          <GalleryHorizontalEnd className="size-4 md:size-5" />
          All
        </TabsTrigger>
        <TabsTrigger
          value="home"
          className="text-[0.8rem] md:text-[0.9rem] text-neutral-500 flex flex-wrap items-center gap-x-2 md:gap-x-3 lg:gap-x-4 capitalize px-2 md:px-4 py-1 md:py-2 rounded-md data-[state=active]:bg-neutral-50 data-[state=active]:shadow-md"
        >
          <House className="size-4 md:size-5" />
          Home
        </TabsTrigger>
        <TabsTrigger
          value="job"
          className="text-[0.8rem] md:text-[0.9rem] text-neutral-500 flex flex-wrap items-center gap-x-2 md:gap-x-3 lg:gap-x-4 capitalize px-2 md:px-4 py-1 md:py-2 rounded-md data-[state=active]:bg-neutral-50 data-[state=active]:shadow-md"
        >
          <BriefcaseBusiness className="size-4 md:size-5" />
          Job
        </TabsTrigger>
        <TabsTrigger
          value="personal"
          className="text-[0.8rem] md:text-[0.9rem] text-neutral-500 flex flex-wrap items-center gap-x-2 md:gap-x-3 lg:gap-x-4 capitalize px-2 md:px-4 py-1 md:py-2 rounded-md data-[state=active]:bg-neutral-50 data-[state=active]:shadow-md"
        >
          <UserRoundPen className="size-4 md:size-5 data-[state=active]:text-blue-500" />
          Personal
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <NoteList />
      </TabsContent>
      <TabsContent value="home">
        <NoteList category="HOME" />
      </TabsContent>
      <TabsContent value="job">
        <NoteList category="JOB" />
      </TabsContent>
      <TabsContent value="personal">
        <NoteList category="PERSONAL" />
      </TabsContent>
    </Tabs>
  );
}
