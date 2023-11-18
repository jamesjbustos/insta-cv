import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function FormSection({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
