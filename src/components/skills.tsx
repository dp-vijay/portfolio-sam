import { skills } from "@/data/site";
import { Tag } from "./tag";

export function Skills() {
  return (
    <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.group}>
          <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{group.group}</dt>
          <dd className="mt-3">
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
