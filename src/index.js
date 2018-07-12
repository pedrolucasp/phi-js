import { API_URL, API_VERSION } from './constants';
import fetch from 'node-fetch';

export default class PhiJS {
  constructor(secretToken) {
    this.secretToken = secretToken;
  }

  async request(endpoint, props) {
    const headers = {
      'X-Figma-Token': this.secretToken
    }

    return await fetch(`${API_URL}/${API_VERSION}/${endpoint}`, { ...props, headers: headers });
  }

  async file(fileId) {
    const endpoint = `files/${fileId}`;

    const res  = await this.request(endpoint);
    const json = await res.json();

    return json;
  }

  async projects(teamId) {
    const endpoint = `teams/${teamId}/projects`

    const res  = await this.request(endpoint);
    const json = await res.json();

    return json;
  }

  async files(projectId) {
    const endpoint = `projects/${projectId}/files`

    const res  = await this.request(endpoint);
    const json = await res.json();

    return json;
  }
}