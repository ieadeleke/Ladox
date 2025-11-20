import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSE Policy Statement | Ladox Engineering",
  description:
    "LADOX ENGINEERING COMPANY LTD. HSE Policy Statement: commitment to a safe and healthy working environment for all.",
};

export default function HsePolicyStatementPage() {
  return (
    <section>
      {/* Hero */}
      <header className="px-5 md:px-20 pt-20 pb-10 cover-bg">
        <div className="max-w-[1100px]">
          <span className="inline-block text-[10px] md:text-xs px-5 py-3 rounded-lg font-bold bg-[#F1FBFF] text-accent mb-6">
            HSE Policy Statement
          </span>
          <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-5 w-[60%] text-white">
            Health, Safety and Environment (HSE)
          </h1>
        </div>
      </header>
      {/* Body */}
      <section className="px-5 md:px-20 mt-10">
        <div className="md:w-[60%] mx-auto">
          <p className="text-sm md:text-base leading-loose md:leading-loose max-w-[900px]">
            It is the policy of LADOX ENGINEERING COMPANY LTD. to provide a safe
            and healthy working environment for all contractors, subcontractor
            and employees/Client&apos;s. No phase of operations or
            administration is considered to be of greater importance than injury
            and illness prevention. Safety takes precedence over expediency or
            shortcuts. We believe that accidents are caused by carelessness and
            that every accident and every injury could be avoided. We will take
            every reasonable step to reduce the possibility of injury, illness
            or accident.
          </p>
          <p className="text-sm md:text-base leading-loose md:leading-loose">
            It is the responsibility of all employees to maintain a safe working
            environment. It is the specific responsibility of management to
            ensure that safety is a primary condition at all times through
            instrument and control. We have recognized responsibilities to
            manage in such a way that resources are conserved and utilized
            effectively. Accordingly, the policy is that LADOX ENGINEERING
            COMPANY. Will:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base leading-loose space-y-3">
            <li>
              Give the highest priority to the health, safety and security of
              employees, contractors, and members of the public.
            </li>
            <li>Achieve continuous improvement in HSE performance.</li>
            <li>
              Maintain professional and competent staff that will perform their
              jobs in line with policy, and also review and develop new HSE
              practices and procedures.
            </li>
            <li>
              Work with the host communities to promote harmonious
              relationships.
            </li>
            <li>
              Ensure that HSE policies will at all times be implemented
              according to the relevant laws and regulations guiding the
              operations in the Federal Republic of Nigeria. They shall also
              reflect the SPDC standards.
            </li>
          </ul>
        </div>
      </section>
      {/* Spacer */}
      <div className="h-20" />
    </section>
  );
}
