import {Badge} from "@/components/ui/badge";

type NotificationDotProps = {
  count: number;
};

export default function NotificationDot({count}: NotificationDotProps) {
  return (
    <>
      {(count > 0) &&
          <Badge
              className="absolute bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 top-0 right-0 translate-x-1/2">
            {count}
          </Badge>
      }
    </>
  );
}
