import { ColumnRegular } from '@revolist/revogrid';
import { defineCustomElements } from '@revolist/revogrid/loader'
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  columns: ColumnRegular[] = [
    { prop: "id", name: "ID" },
    { prop: "name", name: "Name" },
    { prop: "age", name: "Age" },
    { prop: "email", name: "Email" },
  ];
  source: any[] = [
    { id: 1, name: "John1", age: 30, email: "xxx@xxx.xxx" },
    { id: 2, name: "Mike2", age: 25, email: "www@www.www" },
    { id: 3, name: "John3", age: 30, email: "xxx@xxx.xxx" },
    { id: 4, name: "Mike4", age: 25, email: "www@www.www" },
    { id: 5, name: "John5", age: 30, email: "xxx@xxx.xxx" },
    { id: 6, name: "Mike6", age: 25, email: "www@www.www" },
    { id: 7, name: "John7", age: 30, email: "xxx@xxx.xxx" },
    { id: 8, name: "Mike8", age: 25, email: "www@www.www" },
    { id: 9, name: "John9", age: 30, email: "xxx@xxx.xxx" },
    { id: 10, name: "Mike10", age: 25, email: "www@www.www" },
  ];
  componentWillLoad() {
    // initiate revogrid
    return defineCustomElements();
  }
  render() {
    return <revo-grid filter={true} columns={this.columns} source={this.source} />;
  }
}
