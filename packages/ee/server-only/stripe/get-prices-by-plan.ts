import type { STRIPE_PLAN_TYPE } from '@documenso/lib/constants/billing';
import { stripe } from '@documenso/lib/server-only/stripe';

type PlanType = (typeof STRIPE_PLAN_TYPE)[keyof typeof STRIPE_PLAN_TYPE];

export const getPricesByPlan = async (plan: PlanType | PlanType[]) => {
  const planTypes = typeof plan === 'string' ? [plan] : plan;

  const { data: prices } = await stripe.prices.search({
    query: `active:'true' type:'recurring'`,
    expand: ['data.product'],
    limit: 100,
  });

  const filteredPlans = prices.filter((price) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    planTypes.some((plan) => plan === price.product.metadata.plan),
  );

  return filteredPlans;
};
