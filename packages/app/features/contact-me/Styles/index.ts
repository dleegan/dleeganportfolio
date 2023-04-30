import CreateResponsiveStyle from '../../../Utils/Functions/ResponsiveStyles';
import {webStyles} from './web';
import {mobileStyles} from './mobile';

export const responsiveStyle = CreateResponsiveStyle(
  {...webStyles},
  {...mobileStyles},
);
