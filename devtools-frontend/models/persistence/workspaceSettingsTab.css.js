// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.workspace-settings-tab header {
  padding: 0 0 6px;
}

.workspace-settings-tab header > h1 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding-bottom: 3px;
}

.workspace-settings-tab .settings-content {
  overflow-y: auto;
  overflow-x: hidden;
  margin: 8px 8px 8px 0;
  padding: 0 4px;
  flex: auto;
}

.workspace-settings-tab .settings-container {
  width: 100%;
  column-width: 288px;
}

.workspace-settings-tab .settings-tab.settings-container {
  column-width: 308px;
}

.workspace-settings-tab .settings-tab label {
  padding-right: 4px;
  display: inline-flex;
}

.workspace-settings-tab .settings-container-wrapper {
  position: absolute;
  top: 31px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: 9px;
}

.workspace-settings-tab .settings-tab.settings-content {
  margin: 0;
  padding: 0;
}

.workspace-settings-tab .settings-tab p {
  margin: 12px 0;
}

.workspace-settings-tab p.folder-exclude-pattern {
  display: flex;
  align-items: center;
}

.workspace-settings-tab p.folder-exclude-pattern > input {
  flex: auto;
}

.workspace-settings-tab .settings-tab .file-system-container {
  border-top: 1px solid var(--color-background-elevation-2);
  padding: 19px 0 10px;
  margin: 20px 0;
}

.workspace-settings-tab .settings-tab .file-system-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.workspace-settings-tab .settings-tab .file-system-name {
  font-weight: bold;
  flex: none;
  margin-right: 10px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
}

.workspace-settings-tab .settings-tab .file-system-path {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: auto;
}

.workspace-settings-tab .settings-info-message {
  background-color: var(--color-background-elevation-1);
  padding: 10px;
  margin: 20px 0;
}

.workspace-settings-tab .settings-tab.settings-content.settings-container {
  column-width: initial;
  overflow: hidden;
  padding-right: 10px;
}
/*
 * Always show an outline. Needed because we have a white background here.
 */

.workspace-settings-tab .harmony-input[type=text]:not(.error-input):not(:invalid) {
  box-shadow: var(--legacy-focus-ring-inactive-shadow);
}

/*# sourceURL=workspaceSettingsTab.css */
`);
export default styles;
