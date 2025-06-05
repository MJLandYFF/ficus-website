declare namespace AMap {
  class Map {
    constructor(container: HTMLElement, options?: MapOptions);
    addControl(control: any): void;
    add(marker: Marker): void;
    destroy(): void;
  }

  class Marker {
    constructor(options: MarkerOptions);
    on(event: string, callback: () => void): void;
    getPosition(): [number, number];
  }

  class InfoWindow {
    constructor(options: InfoWindowOptions);
    open(map: Map, position: [number, number]): void;
  }

  class ToolBar {
    constructor();
  }

  class Scale {
    constructor();
  }

  class Pixel {
    constructor(x: number, y: number);
  }

  interface MapOptions {
    zoom?: number;
    center?: [number, number];
  }

  interface MarkerOptions {
    position: [number, number];
    title?: string;
  }

  interface InfoWindowOptions {
    content: string;
    offset?: Pixel;
  }
}

interface Window {
  AMap: typeof AMap;
} 