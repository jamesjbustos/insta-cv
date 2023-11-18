import EditResumeIcon from '@/icons/EditResumeIcon';
import TrashIcon from '@/icons/TrashIcon';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ResumeCard({ resumeName, templateId, onEdit, onDelete }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{resumeName || 'Untitled Resume'}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p className="text-sm">Template: {templateId}</p>
        <div className="flex space-x-4">
          <Button variant="outline" onClick={onEdit}>
            <EditResumeIcon />
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            <TrashIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
