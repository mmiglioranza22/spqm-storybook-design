import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableProps,
  TableRow,
} from "./Table";

import styles from "./Table.module.css";

const tasks = [
  {
    id: "QUEST-1",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-2",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-3",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-4",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-5",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-6",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-7",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-8",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-9",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-10",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-11",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-12",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-13",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-14",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-15",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-16",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-17",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
  {
    id: "QUEST-18",
    title: "Update dependencies",
    author: "John Jackson",
    owner: "Jack Johnson",
    type: "Chore",
    priority: "Normal",
    difficulty: "Low",
    label: "Chore",
    squad: "Integrations",
    campaign: "CAMP-2",
    status: "Blocked",
    progress: "0%",
  },
];

const tableHeaders = [
  { show: true, position: 0, label: "ID" },
  { show: true, position: 1, label: "Title" },
  { show: true, position: 2, label: "Author" },
  { show: true, position: 3, label: "Owner" },
  { show: true, position: 4, label: "Type" },
  { show: true, position: 5, label: "Priority" },
  { show: true, position: 6, label: "Difficulty" },
  { show: true, position: 7, label: "Label" },
  { show: true, position: 8, label: "Squad" },
  { show: true, position: 9, label: "Campaign" },
  { show: true, position: 10, label: "Status" },
  { show: true, position: 11, label: "Progress" },
];

const TableDemo = ({ variant }: TableProps) => {
  return (
    <div className={clsx(styles["table-container"], styles[variant])}>
      <Table variant={variant}>
        <TableHeader variant={variant}>
          <TableRow variant={variant} isHeaderRow={true}>
            {tableHeaders.map(({ label }) => (
              <TableHead
                variant={variant}
                key={label}
                className={label === "ID" ? styles["id-cell"] : ""}
              >
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody variant={variant}>
          {tasks.map((task) => (
            <TableRow variant={variant} key={task.id}>
              <TableCell variant={variant} className={styles["id-cell"]}>
                <p className={styles.cell}>{task.id}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.title}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.author}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.owner}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.type}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.priority}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.difficulty}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.label}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.squad}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.campaign}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.status}</p>
              </TableCell>
              <TableCell variant={variant}>
                <p className={styles.cell}>{task.progress}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableDemo;
