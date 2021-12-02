import {
  Text as BaseText,
  Link as BaseLink,
  ListItem as BaseListItem,
} from 'evergreen-ui';
import { Link as RouterLink } from 'react-router-dom';

export const Text = ({ children, ...props }) => (
  <BaseText color="" {...props}>{children}</BaseText>
);

export const Link = ({ children, ...props }) => (
  <BaseLink color="" is={RouterLink} {...props}>{children}</BaseLink>
);

export const ListItem = ({ children, ...props }) => (
  <BaseListItem color="" {...props}>{children}</BaseListItem>
);
