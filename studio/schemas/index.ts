import settings from './settings';
import project from './project';
import { pageTypes } from './pages';
import { legalTypes } from './legal';
export const schemaTypes = [settings, project, ...pageTypes, ...legalTypes];
