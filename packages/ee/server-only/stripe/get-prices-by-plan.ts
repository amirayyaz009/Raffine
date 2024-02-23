import { stripe } from '@documenso/lib/server-only/stripe';

export const getPricesByPlan = async (_arg1?: unknown, _arg2?: unknown) => {
  const { data: prices } = await stripe.prices.list();

  return prices;
};
