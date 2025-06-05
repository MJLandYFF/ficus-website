import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MapComponentProps {
  address: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ address, className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || !window.AMap) return;

    // 初始化地图
    mapInstance.current = new window.AMap.Map(mapRef.current, {
      zoom: 15,
      center: [121.237, 31.383], // 上海市嘉定区的大致坐标
    });

    // 添加工具条和比例尺
    mapInstance.current.addControl(new window.AMap.ToolBar());
    mapInstance.current.addControl(new window.AMap.Scale());

    // 创建标记
    const marker = new window.AMap.Marker({
      position: [121.237, 31.383],
      title: 'FICUS 公司地址',
    });

    // 将标记添加到地图
    mapInstance.current.add(marker);

    // 创建信息窗体
    const infoWindow = new window.AMap.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h4 style="margin: 0 0 5px 0;">FICUS 公司地址</h4>
          <p style="margin: 0;">中国 上海市嘉定区城北路1585弄<br/>上海天华人工智能科创园 11号楼101</p>
        </div>
      `,
      offset: new window.AMap.Pixel(0, -30)
    });

    // 绑定点击事件
    marker.on('click', () => {
      infoWindow.open(mapInstance.current, marker.getPosition());
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={cn("w-full h-[400px] rounded-lg shadow-md", className)}
    />
  );
};

export default MapComponent;
