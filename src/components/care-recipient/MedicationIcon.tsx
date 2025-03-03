import { MedicationType, Medication } from "@/caregiverData";

import { PillIcon, SyringeIcon } from "../icons";

const MedicationIcon = ({ med }: { med: Medication }) => {
  if (med.type === MedicationType.Injection) {
    return <SyringeIcon />;
  }

  return <PillIcon />;
}

export default MedicationIcon;