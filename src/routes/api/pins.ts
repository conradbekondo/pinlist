import { Pin } from "@/models/pin";
import { faker } from "@faker-js/faker";

export async function GET() {
  const count = faker.number.int({ min: 1, max: 200 });
  return {
    data: Array(count)
      .fill(0)
      .map(() => {
        const createdAt = faker.date.past();
        return {
          createdAt,
          updatedAt: createdAt,
          createdBy: faker.number.int(),
          description: faker.lorem.paragraph(),
          title: faker.lorem.sentence(),
          image: faker.image.url(),
        } as Pin;
      }),
    total: count,
  };
}
