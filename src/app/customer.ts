import {Job} from './job';

export interface Customer {
  id: number;
  name: string;
  birthday: string;
  address: string;
  jobId: number;
  job: Job;
}
