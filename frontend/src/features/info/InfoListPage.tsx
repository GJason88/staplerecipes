import { Stack } from '@mui/material';
import InfoListSection from './components/InfoListSection';

interface InfoListPageProps {
  categories: Array<InfoListSectionState>;
}

export default function InfoListPage({ categories }: InfoListPageProps) {
  return (
    <Stack gap='32px'>
      {categories.map((cat, i) => (
        <InfoListSection title={cat.title} items={cat.items} key={i}></InfoListSection>
      ))}
    </Stack>
  );
}
