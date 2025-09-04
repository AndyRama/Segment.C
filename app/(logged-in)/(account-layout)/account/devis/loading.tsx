import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DevisLoading() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <Skeleton className="h-8 w-64 mx-auto mb-2" />
        <Skeleton className="h-4 w-80 mx-auto" />
      </div>
      
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create" disabled>
            <Skeleton className="h-4 w-24" />
          </TabsTrigger>
          <TabsTrigger value="list" disabled>
            <Skeleton className="h-4 w-20" />
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="mt-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-72" />
            </CardHeader>
            
            <CardContent className="flex flex-col gap-4">
              {/* Client type selector */}
              <div className="flex gap-4 mb-4">
                <Skeleton className="h-10 w-32 rounded-full" />
                <Skeleton className="h-10 w-36 rounded-full" />
              </div>
              
              {/* Form fields */}
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-40 mb-2" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
              
              {/* Guarantees section */}
              <Skeleton className="h-24 w-full rounded-lg" />
            </CardContent>
            
            <div className="p-6 pt-0">
              <Skeleton className="h-12 w-full" />
            </div>
          </Card>
          
          <Skeleton className="h-4 w-96 mx-auto mt-4" />
        </TabsContent>
      </Tabs>
    </div>
  );
}