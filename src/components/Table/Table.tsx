// shadcn implementation without tailwind classes
// Check full API: https://ui.shadcn.com/docs/components/table

import * as React from "react";
import clsx from "clsx";
import styles from "./Table.module.css";

type VariantProps = {
  variant: "primary" | "dark" | "light";
};

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <table
    ref={ref}
    className={clsx(styles.Table, styles[variant], className)}
    tabIndex={0}
    {...props}
  />
));

Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <thead
    ref={ref}
    className={clsx(styles.TableHeader, styles[variant], className)}
    {...props}
  />
));

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <tbody
    ref={ref}
    className={clsx(styles.TableBody, styles[variant], className)}
    // tabIndex={-1}
    {...props}
  />
));

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={clsx(styles.TableFooter, styles[variant], className)}
    {...props}
  />
));

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> &
    VariantProps & { isHeaderRow?: boolean }
>(({ className, variant, isHeaderRow, ...props }, ref) => {
  const rowClasses = isHeaderRow ? styles.TableHeaderRow : styles.TableRow;
  return (
    <tr
      ref={ref}
      className={clsx(rowClasses, styles[variant], className)}
      tabIndex={0}
      {...props}
    />
  );
});

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <th
    ref={ref}
    className={clsx(styles.TableHead, styles[variant], className)}
    {...props}
  />
));

TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <td
    ref={ref}
    className={clsx(styles.TableCell, styles[variant], className)}
    {...props}
  />
));

TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & VariantProps
>(({ className, variant, ...props }, ref) => (
  <caption
    ref={ref}
    className={clsx(styles.TableCaption, styles[variant], className)}
    {...props}
  />
));

TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  type VariantProps as TableProps,
};
