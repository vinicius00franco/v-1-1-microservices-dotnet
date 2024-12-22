# Etapa de Build
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copiar e restaurar dependências
COPY ["ItemService.csproj", "./"]
RUN dotnet restore "ItemService.csproj"

# Copiar o restante do código e publicar
COPY . .
WORKDIR "/src"
RUN dotnet build "ItemService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ItemService.csproj" -c Release -o /app/publish

# Etapa de Runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "ItemService.dll"]
