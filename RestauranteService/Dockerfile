# Etapa de Build
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copiar e restaurar dependências
COPY *.csproj ./
RUN dotnet restore

# Copiar o restante do código e publicar
COPY . ./
RUN dotnet publish -c Release -o out

# Etapa de Runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app/out .

ENTRYPOINT [ "dotnet", "RestauranteService.dll" ]
