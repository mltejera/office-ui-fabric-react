import * as React from 'react';
import { NavProps } from '@fluentui/react-nav-preview';
import { Drawer, DrawerBody, DrawerHeader } from '@fluentui/react-drawer';
import { Button, Tooltip, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Navigation24Filled } from '@fluentui/react-icons';

import { Tree, TreeItem, TreeItemLayout } from '@fluentui/react-tree-preview';

const useStyles = makeStyles({
  appShell: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    height: '1080px',
    backgroundColor: '#fff',
  },

  content: {
    ...shorthands.flex(1),
    ...shorthands.padding('16px'),

    display: 'grid',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gridRowGap: tokens.spacingVerticalXXL,
    gridAutoRows: 'max-content',
  },

  field: {
    display: 'grid',
    gridRowGap: tokens.spacingVerticalS,
  },
});

const DemoNav = () => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={styles.appShell}>
      {!isOpen && (
        <Tooltip content="Open" relationship="label">
          <Button icon={<Navigation24Filled />} onClick={() => setIsOpen(true)} />
        </Tooltip>
      )}
      <Drawer type="inline" open={isOpen} className={styles.root}>
        <DrawerHeader>
          <Button
            aria-label="Close"
            onClick={() => setIsOpen(false)}
            appearance="subtle"
            icon={<Navigation24Filled />}
          />
        </DrawerHeader>
        <DrawerBody as="nav">
          {' '}
          <Tree aria-label="Default">
            <TreeItem itemType="branch">
              <TreeItemLayout>level 1, item 1</TreeItemLayout>
              <Tree>
                <TreeItem itemType="leaf">
                  <TreeItemLayout>level 2, item 1</TreeItemLayout>
                </TreeItem>
                <TreeItem itemType="leaf">
                  <TreeItemLayout>level 2, item 2</TreeItemLayout>
                </TreeItem>
                <TreeItem itemType="leaf">
                  <TreeItemLayout>level 2, item 3</TreeItemLayout>
                </TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem itemType="branch">
              <TreeItemLayout>level 1, item 2</TreeItemLayout>
              <Tree>
                <TreeItem itemType="branch">
                  <TreeItemLayout>level 2, item 1</TreeItemLayout>
                  <Tree>
                    <TreeItem itemType="leaf">
                      <TreeItemLayout>level 3, item 1</TreeItemLayout>
                    </TreeItem>
                  </Tree>
                </TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem itemType="leaf">
              <TreeItemLayout>level 1, item 3</TreeItemLayout>
            </TreeItem>
          </Tree>
        </DrawerBody>
      </Drawer>
      some app content
    </div>
  );
};

// export const Default = (props: Partial<NavProps>) => <Nav {...props} />;

export const Default = (props: Partial<NavProps>) => DemoNav();
