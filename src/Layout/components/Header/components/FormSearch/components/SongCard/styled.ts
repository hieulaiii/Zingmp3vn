import tw from 'twin.macro';

import { Text } from '@/components/common/Element';

export const TextCustom = tw(Text)`text-whiteAlpha-50 text-xs font-medium cursor-pointer`;

export const TextCustomHover = tw(TextCustom)`hover:(underline text-textColor-linkHover)`;
