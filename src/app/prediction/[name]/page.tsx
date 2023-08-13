import { Card } from "@radix-ui/themes";

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};
interface Params {
  params: { name: string };
}
async function Page({ params }: Params) {
  const age = await getPredictedAge(params.name);
  const gender = await getPredictedGender(params.name);
  const country = await getPredictedNationality(params.name);
  const [a, g, c] = await Promise.all([age, gender, country]);
  return (
    <div>
      <Card>
        <div>Personal Info</div>
        <div>Age:{a?.age}</div>
        <div>Gender:{g?.gender}</div>
        <div>Country: {c?.country[0]?.country_id}</div>
      </Card>
    </div>
  );
}

export default Page;
