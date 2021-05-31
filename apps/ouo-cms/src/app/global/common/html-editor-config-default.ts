import { HtmlEditorConfig } from '@neux/cms-core';

export const HTML_EDITOR_CONFIG_DEFAULT: HtmlEditorConfig = {
  name: 'default',
  tableMaxCol: 18,
  tableMaxRow: 18,
  actionEnable: {
    FONT_STYLE: true,
    FONT_POSITON: true,
    LIST: true,
    INDENT: true,
    HIGHLIGHT: {
      HIGHLIGHT1: true,
      HIGHLIGHT2: true,
      HIGHLIGHT3: true,
      HIGHLIGHT4: true,
    },
    UNHIGHLIGHT: true,
    LINK: true,
    FILE: true,
    IMAGE: true,
    TABLE: true,
    YOUTUBE: true,
  },
};
