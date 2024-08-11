import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Markdown from '@/components/Markdown';

export default function ReviewSection({
  data,
}: {
  data: {
    _id: string;
    images: string[];
    title: string;
    slug: string;
    discount: number;
    avgRating: number;
    originalPrice: number;
    price: number;
    description: string;
  };
}) {
  const [tabName, setTabName] = React.useState('description');
  return (
    <div className="my-32">
      <div>
        <Tabs defaultValue="description">
          <div className="tabs flex gap-8 border-b">
            <button
              onClick={() => setTabName('description')}
              className={`${tabName === 'description' && 'border-b-2 border-violet-600  text-violet-600'} pb-8 text-lg `}
            >
              Description
            </button>
            <button
              onClick={() => setTabName('review')}
              className={`${tabName === 'review' && 'border-b-2 border-violet-600  text-violet-600'} pb-8 text-lg `}
            >
              Reviews (1)
            </button>
          </div>
          <TabsContent value={tabName}>
            <div className="prose mt-8 max-w-3xl font-light">
              <Markdown markdownText={data?.description} />
            </div>
          </TabsContent>
          <TabsContent value="review">
            {/* <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card> */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
