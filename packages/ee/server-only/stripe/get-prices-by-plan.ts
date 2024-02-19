import { stripe } from '@documenso/lib/server-only/stripe';

export const getPricesByPlan = async () => {
  const { data: prices } = await stripe.prices.list();

  return prices;
};
