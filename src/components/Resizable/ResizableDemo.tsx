import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

type ResizableDemoProps = {
  variant: "light" | "dark";
  disabled?: boolean;
};

import styles from "./Resizable.module.css";
import clsx from "clsx";

const ResizableDemo = ({ variant, disabled }: ResizableDemoProps) => {
  const boardContainerClasses = clsx(
    styles["board-container"],
    styles[variant]
  );
  const boardHeaderClasses = clsx(styles["board-header"], styles[variant]);
  const boardBodyClasses = clsx(styles["board-body"], styles[variant]);
  return (
    <div
      id="wrapper"
      style={{
        width: "900px",
        height: "600px",
      }}
    >
      <PanelGroup direction="horizontal" style={{ gap: "2px" }}>
        <Panel>
          <PanelGroup direction="vertical" style={{ gap: "2px" }}>
            <Panel>
              <div className={boardContainerClasses} tabIndex={0}>
                <div className={boardHeaderClasses}>Header</div>
                <div className={boardBodyClasses}>top</div>
              </div>
            </Panel>
            <PanelResizeHandle disabled={disabled} />
            <Panel>
              <PanelGroup direction="horizontal" style={{ gap: "2px" }}>
                <Panel>
                  <div className={boardContainerClasses} tabIndex={0}>
                    <div className={boardHeaderClasses}>Header</div>
                    <div className={boardBodyClasses}>left</div>
                  </div>
                </Panel>
                <PanelResizeHandle disabled={disabled} />
                <Panel>
                  <div className={boardContainerClasses} tabIndex={0}>
                    <div className={boardHeaderClasses}>Header</div>
                    <div className={boardBodyClasses}>middle</div>
                  </div>
                </Panel>
                <PanelResizeHandle disabled={disabled} />
                <Panel>
                  <div className={boardContainerClasses} tabIndex={0}>
                    <div className={boardHeaderClasses}>Header</div>
                    <div className={boardBodyClasses}>right</div>
                  </div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle disabled={disabled} />
        <Panel>
          <div className={boardContainerClasses} tabIndex={0}>
            <div className={boardHeaderClasses}>Header</div>
            <div className={boardBodyClasses}>right</div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResizableDemo;
