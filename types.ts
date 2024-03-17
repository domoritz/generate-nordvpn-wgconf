export type KeychainConfig = {
  exit_peer: {
    endpoint: string;
    public_key: string;
  };
  telio_features: string;
  dns_servers: string[];
  private_key: string;
};

export interface Server {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  station: string;
  ipv6_station: string;
  hostname: string;
  load: number;
  status: string;
  type: string;
  cpt: number;
  locations: Location[];
  services: Service[];
  technologies: Technology[];
  groups: Group[];
  specifications: Specification[];
  ips: IP[];
}

export interface Location {
  id: number;
  created_at: string;
  updated_at: string;
  latitude: number;
  longitude: number;
  country: Country;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  city: City;
}

export interface City {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  dns_name: string;
  hub_score: number;
}

export interface Service {
  id: number;
  name: string;
  identifier: string;
  created_at: string;
  updated_at: string;
}

export interface Technology {
  id: number;
  name: string;
  identifier: string;
  created_at: string;
  updated_at: string;
  metadata: Metadata[];
  pivot: Pivot;
}

export interface Metadata {
  name: string;
  value: string;
}

export interface Pivot {
  technology_id: number;
  server_id: number;
  status: string;
}

export interface Group {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  identifier: string;
  type: GroupType;
}

export interface GroupType {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  identifier: string;
}

export interface Specification {
  id: number;
  title: string;
  identifier: string;
  values: Value[];
}

export interface Value {
  id: number;
  value: string;
}

export interface IP {
  id: number;
  created_at: string;
  updated_at: string;
  server_id: number;
  ip_id: number;
  type: string;
  ip: IPAddress;
}

export interface IPAddress {
  id: number;
  ip: string;
  version: number;
}

export type ExtractedWireguardConfig = {
  publicKey: string;
  endpoint: string;
};
