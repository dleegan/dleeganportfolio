import {webStyles} from './web';
import {mobileStyles} from './mobile';
import CreateResponsiveStyle from '../../../Utils/Functions/ResponsiveStyles';

export const responsiveStyle = CreateResponsiveStyle(
  {...webStyles},
  {...mobileStyles},
);
