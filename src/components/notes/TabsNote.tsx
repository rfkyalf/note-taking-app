import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BriefcaseBusiness,
  GalleryHorizontalEnd,
  House,
  UserRoundPen,
} from 'lucide-react';
import NoteList from './NoteList';
import { NoteCategory } from '@prisma/client';

const tabData = [
  { value: 'all', label: 'All', icon: GalleryHorizontalEnd },
  { value: 'home', label: 'Home', icon: House },
  { value: 'job', label: 'Job', icon: BriefcaseBusiness },
  { value: 'personal', label: 'Personal', icon: UserRoundPen },
];

export default function TabsNote() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 lg:gap-x-6 mb-4">
        {tabData.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="text-[0.8rem] md:text-[0.9rem] text-neutral-400 flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4 capitalize px-2 md:px-4 py-1 md:py-2 rounded-md data-[state=active]:bg-neutral-50 data-[state=active]:text-neutral-700 data-[state=active]:shadow-md"
          >
            <tab.icon className="size-4 md:size-5" />
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <NoteList
            category={
              tab.value !== 'all'
                ? (tab.label.toUpperCase() as NoteCategory)
                : undefined
            }
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}